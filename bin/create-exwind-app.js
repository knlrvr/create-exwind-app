#!/usr/bin/env node

const { execSync } = require(`child_process`);

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit' })
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/knlrvr/create-exwind-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install -D`;

console.log(`Cloning repository in ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit();

console.log(`Installing required dependencies for ${repoName}`);

const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(); 

console.log(`Congrats! The repo is ready!`);
console.log(`Please use the following commands to get started with create-exwind-app and install Convex (if you need a backend).`);
console.log(` `);
console.log(`cd ${repoName}`);
console.log(`npm run dev`);
console.log(` `);
console.log(`~* optional *~`)
console.log(`npx convex dev`);
console.log(`npm install @clerk/clerk-react ( for authentication )`);
console.log(`npm run dev`);