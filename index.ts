#!/usr/bin/env node

import fs from "fs";
import path from "path";
import chalk from "chalk";
import AdmZip from "adm-zip";
import inquirer from "inquirer";
import { execSync } from "child_process";

const runCommand = (command: string, cwd: string = process.cwd()) => {
    try {
        execSync(command, { stdio: "inherit", cwd });
    } catch (err) {
        console.error(chalk.red(`Erro ao executar: ${command}`));
        process.exit(1);
    }
};

const askZip = async (cwd: string, projectName: string) => {
    const { shouldZip }: { shouldZip: boolean } = await inquirer.prompt([
        {
            type: "confirm",
            name: "shouldZip",
            message: "Deseja gerar um arquivo .zip com o projeto?",
            default: false,
        },
    ]);

    if (shouldZip) {
        const zip = new AdmZip();
        zip.addLocalFolder(cwd);
        const outputPath = `${process.cwd()}/${projectName}.zip`;
        zip.writeZip(outputPath);
        console.log(chalk.green(`📦 Arquivo ZIP criado em: ${outputPath}`));
    }
};

const main = async () => {
    console.log(chalk.blueBright("\n🚀 create-mobile-project CLI\n"));

    const { projectName } = await inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "Nome do projeto:",
            validate: (input: string) => !!input || "O nome é obrigatório.",
        },
    ]);

    const { template } = await inquirer.prompt([
        {
            type: "list",
            name: "template",
            message: "Escolha o template:",
            choices: [
                { name: "Expo CLI", value: "expo" },
                { name: "Expo Router Stack", value: "expo-router" },
            ],
        },
    ]);

    const { features }: { features: string[] } = await inquirer.prompt([
        {
            type: "checkbox",
            name: "features",
            message: "Quais ferramentas deseja adicionar?",
            choices: [
                { name: "Supabase", value: "supabase" },
                { name: "Axios", value: "axios" },
                { name: "React Query", value: "react-query" },
                { name: "Zod (validação)", value: "zod" },
                { name: "dotenv (.env)", value: "dotenv" },
                { name: "React Native Paper", value: "paper" },
                { name: "TailwindCSS + NativeWind", value: "tailwind" },
            ],
        },
    ]);

    console.log(
        chalk.green(
            `\n▶️ Criando projeto ${projectName} com template ${template}`
        )
    );
    runCommand(
        `npx create-expo-app@latest ${projectName} ${
            template === "expo-router" ? "-t with-router" : ""
        }`
    );

    const cwd = path.join(process.cwd(), projectName);

    if (features.includes("tailwind")) {
        runCommand(`npm install nativewind tailwindcss`, cwd);
        runCommand(`npx tailwindcss init`, cwd);
        fs.writeFileSync(
            `${cwd}/tailwind.config.js`,
            `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`.trim()
        );
    }

    if (features.includes("supabase")) {
        runCommand(`npm install @supabase/supabase-js`, cwd);
        fs.mkdirSync(`${cwd}/lib`, { recursive: true });
        fs.writeFileSync(
            `${cwd}/lib/supabase.ts`,
            `
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
`.trim()
        );
    }

    if (features.includes("axios")) {
        runCommand(`npm install axios`, cwd);
        fs.writeFileSync(
            `${cwd}/lib/api.ts`,
            `
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://sua-api.com'
})
`.trim()
        );
    }

    if (features.includes("react-query")) {
        runCommand(`npm install @tanstack/react-query`, cwd);
    }

    if (features.includes("zod")) {
        runCommand(`npm install zod`, cwd);
    }

    if (features.includes("dotenv")) {
        runCommand(`npm install react-native-dotenv`, cwd);
        fs.writeFileSync(
            `${cwd}/.env`,
            `EXPO_PUBLIC_SUPABASE_URL=https://xxx.supabase.co\nEXPO_PUBLIC_SUPABASE_ANON_KEY=chave`
        );
    }

    if (features.includes("paper")) {
        runCommand(
            `npm install react-native-paper react-native-vector-icons`,
            cwd
        );
    }

    console.log(
        chalk.greenBright(`\n✅ Projeto ${projectName} criado com sucesso!`)
    );
    console.log(chalk.cyan(`➡️ cd ${projectName} && npx expo start`));

    await askZip(cwd, projectName);
};

main();
