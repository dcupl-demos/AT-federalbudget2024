<div align="center">
	<h1 align="center">dcupl-demos/AT-federalbudget2024</h1>
	<p align="center">Austrian federal budget data 2024, including 62349 data records, published by the BMF, Bundesministerium für Finanzen (Federal Ministry of Finance)
    <br />Download: <a href="https://www.data.gv.at/katalog/dataset/bundesbudget-verzeichnis-veranschlagter-konten-2024" target="_blank">Bundesbudget – Verzeichnis veranschlagter Konten 2024</a><br />
    <br />Demo project for <a href="http://www.dcupl.com?utm_source=github.com&utm_medium=readme&utm_campaign=dcupl-demos-fashion-products" target="_blank">dcupl</a>, Rapid Development Platform for Data-Intensive Web Applications.</p> <br />
</div>

<p align="center">
<strong>@dcupl/cli</strong><br/>
  <a href="https://npmjs.com/package/@dcupl/cli">
    <img src="https://img.shields.io/npm/v/@dcupl/cli/latest.svg?style=flat-square" alt="dcupl CLI" />
  </a>
  <a href="https://npmjs.com/package/@dcupl/cli" rel="nofollow">
    <img src="https://img.shields.io/npm/dt/@dcupl/cli.svg?style=flat-square" alt="dcupl CLI">
  </a>
</p>

<p align="center">
<strong>@dcupl/core</strong><br/>
  <a href="https://npmjs.com/package/@dcupl/core">
    <img src="https://img.shields.io/npm/v/@dcupl/core/latest.svg?style=flat-square" alt="dcupl CLI" />
  </a>
  <a href="https://npmjs.com/package/@dcupl/core" rel="nofollow">
    <img src="https://img.shields.io/npm/dt/@dcupl/core.svg?style=flat-square" alt="dcupl Core">
  </a>
</p>

<p align="center">
  <a href="https://github.com/dcupl" title="dcupl on github"><span class="sr-only">GitHub</span><svg fill="#0225EE" width="30" heigth="30"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a>
</p>

<hr>

# Austrian Federal Budget 2024

This project provides the data of the 2024 Austrian Federal Budget as released by the Federal Ministry of Finance. The data can be downloaded on the Open Data website operated by the ministry - https://www.data.gv.at/katalog/dataset/bundesbudget-verzeichnis-veranschlagter-konten-2024

Using dcupl, you can explore the allocation of financial resources across various government sectors. This project aims to provide actionable insights into the budget prioritization processes in Austria for 2024. Additionally, it serves as an introduction to the features of the dcupl Console. On one hand, this project highlights the capabilities of the dcupl platform; on the other, it establishes a foundation for potential applications that could be developed using the budget data and the dcupl SDK.

## Data Source

The data utilized in this analysis comes from the Austrian Federal Ministry of Finance, detailing the planned federal budget for the year 2024. The lists of budgeted accounts are detailed documents relating to the federal budget, which present the profit and financing estimate at account level.

The project uses the **/dcupl/data/Bund_Verzeichnis_veranschlagter_Konten_2024_mit_PA_und_GF.csv**, which lists all budgeted accounts (with personnel offices and cash flow).

In addition, two more CSV data sources have been created:

- **/dcupl/data/Aufgabenbereich.csv:** This file provides a list of all scope of duties (Aufgabenbereiche) as detailed in the Budget Documentation Reading Guide 2024 available at https://www.parlament.gv.at/dokument/budgetdienst/budget/BD-Lesehilfe-zu-den-Budgetunterlagen-2024.pdf, which are referenced in the main budget data source.
- **/dcupl/data/Untergliederung.csv:** This file provides a list of all subdivisions (Untergliederungen) as described in the Directory of Budget Accounts 2024 available at https://www.data.gv.at/katalog/dataset/bundesbudget-verzeichnis-veranschlagter-konten-2024#resources, which are referenced in the main budget data source.

These data sources have been developed to enhance the readability and accessibility of the data.



## Ideas for Apps

- **Interactive Visualizations**: Utilize `dcupl` to interact with the budget data through dynamic charts and graphs, allowing users to drill down into specific categories of spending and revenue.
- **Predictive Analysis**: Implement predictive models to forecast future budget trends based on historical data and projected economic conditions.
- **Budget Allocation Review**: Analyze how budget allocations align with national priorities and economic goals, providing a critical review of spending efficiency.
- **Comparative Analysis**: Compare the 2024 budget with previous years to assess changes in financial focus and policy direction.


## How to dcupl

This Project was generated using the `@dcupl/cli`. More informations can be found at [https://dcupl.com](https://dcupl.com)

### 1) Setup

```
npm install
```

### 2) Connect your local project with the dcupl console

- Go to [https://console.dcupl.com](https://console.dcupl.com) and create your **free** account.
- Set your `projectId` in the dcupl.config.json
- Set your `apiKey` in the dcupl.secrets.json
- Push your local workspace to the console using the CLI `dcupl files:push --name my-first-push`


### 3) Start your development server

```
npm run serve
```

### 4) View your data in the console
View your data in the **Data Explorer Tab** in the console (you may need reload your browser)