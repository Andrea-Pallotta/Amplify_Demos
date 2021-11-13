# Amplify_Demos
Repo containing the demos for the Amplify presentation

# Prerequisites

- Node.js `v12.x` or later
- npm `v5.x` or later
- git `v2.14.1` or later
- ReactJS 17.x.x or later
- Basic ReactJS, ES6 syntax knowledge
- AWS account

# Requisites
- AWS Account
- AWS Amplify CLI
  - NPM: `npm install -g @aws-amplify/cli`
  - cURL (Unix): `curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL`
  - cURL (Windows): `curl -sL https://aws-amplify.github.io/amplify-cli/install-win -o install.cmd && install.cmd`
  - In case you have trouble, refer to this guide: https://docs.amplify.aws/start/getting-started/installation/q/integration/react/

# How to run the project
1. clone the repo: `git clone https://github.com/Andrea-Pallotta/Amplify_Demos.git`
2. cd into `amplify_demo_1`
3. install dependencies: `npm install` or `yarn add`
4. run `amplify pull --appId d2mbquh4d2izu1 --envName demo` to install Amplify resources. 
  - `access_key_id` and `secret_access_key` are in the `/.aim_creds.csv` file
5. run the reactJS app: `npm start` or `yarn start`

# GraphQL creds:
- GraphQL endpoint: `https://phhjrgl2yrfohphumhxwxuuxlq.appsync-api.us-east-1.amazonaws.com/graphql`
- GraphQL API KEY: `da2-yi7w3wadmjfhdkvzpa7cpbfu7e`

# Notes
For any problem, contact me at ap4534@rit.edu before the presentation
