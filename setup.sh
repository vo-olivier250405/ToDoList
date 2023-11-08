#!/bin/bash

help() {
	printf "\n\t\033[1;32mScript to init a Typescript project\033[0m\n"
	printf "\nusage: <init|help> <project_name?> <url_of_git_repo?>\n"
	printf "\n?: means optional\n\n"
	printf "init\t\t\twill initialize the Typescript project\n"
	printf "<project_name?>\t\twill init in a new dir (default: current dir '.')\n"
	printf "<url_of_git_repo?>\tclone the repo with and rename if with <project_name>\n"
}

init_files() {
	# init 'package.json'
	echo \
		'{
	"name": "typescript",
	"version": "1.0.0",
	"description": "Example package.json for the ETNA TS pool",
	"main": "build/index.js",
	"scripts": {
		"dev": "tsc && node .",
		"build": "tsc",
		"start": "node .",
		"lint": "eslint --fix"
	},
	"author": "",
	"license": "ISC",
	"dependencies": {
		"eslint-config-airbnb-base": "^15.0.0",
		"eslint-config-airbnb-typescript": "^17.0.0",
		"readline-sync": "^1.4.10"
	},
	"devDependencies": {
		"@types/readline-sync": "^1.4.4",
		"@types/node": "^20.6.3"
	}
}' \
		>$name/package.json

	# init 'tsconfig.json'
	echo \
		'{
	"compilerOptions": {
		"target": "es2016",
		"module": "CommonJS",
		"resolveJsonModule": true,
		"outDir": "build",
		"preserveConstEnums": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"strict": true,
		"skipLibCheck": true
	},
	"include": ["src"],
	"exclude": ["node_modules", "build"]
}' \
		>$name/tsconfig.json

	# init '.eslintrc.json'
	echo \
		'{
	"extends": ["airbnb-base", "airbnb-typescript/base"],
	"parser": "@typescript-eslint/parser",
	"parserOptions": { "project": ["./tsconfig.json"] },
	"plugins": ["@typescript-eslint"],
	"rules": {
		"no-console": "off",
		"no-restricted-syntax": "off",
		"no-param-reassign": "off"
	},
	"ignorePatterns": ["build", "node_modules"]
}' \
		>$name/.eslintrc.json

	# init '.gitignore'
	echo \
		'node_modules/
build/' \
		>$name/.gitignore

	# init src/index.ts
	mkdir -p $name/src
	echo 'console.log("hello world");' >$name/src/index.ts
}

if [ -z $1 ] || [ $1 == "help" ] || [ $1 == "-h" ] || [ $1 == "--help" ]; then
	help
	exit 1
fi

if [ $1 != "init" ]; then
	printf "\nUnknown argument: \033[1;36m$1\033[0m\nPlease use \033[1;36mhelp\033[0m to see more details:\n\n\t"
	printf "\033[1;36mbash setup.sh help\033[0m\n"
	exit 1
fi

if [ -z $2 ]; then
	name="."
else
	name=$2
fi

if [ ! -z $3 ]; then
	git clone $3 $name
fi

mkdir -p $name

init_files

if [ "$name" != '.' ]; then
	cd $name
fi

npm i

# final output
printf "\n\033[1;36mInstall complete!\033[0m\n"
printf "\nRun the command to start:\n\n\t"
if [ "$name" != '.' ]; then
	printf "\033[1;36mcd $name\033[0m\n\t"
fi
printf "\033[1;36mnpm run dev\033[0m\n"
