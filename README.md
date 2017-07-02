# TWOverflow - Tribal Wars 2 Tool Pack

High customizable tools for Tribal Wars 2.

## Modules

### FarmOverflow

Tool with a lot of settings and filters to farm automatically around all your villages.
See all informations and screenshots [here](https://github.com/FarmOverflow/FarmOverflow/wiki/FarmOverflow).

### CommandQueue

Command planer! Send attacks/supports or relocate troops specifying the date it shold arrive, or a data to send. See all informations and screenshots [here](https://github.com/FarmOverflow/FarmOverflow/wiki/CommandQueue).

## Build

You'll need install [Node.js](https://nodejs.org/en/download/) to build the script from source.

Clone and install dependencies.

```bash
git clone https://github.com/FarmOverflow/FarmOverflow.git
cd FarmOverflow
npm install
```

You can specify which modules you want to include in the final build.

`grunt build -modules=farm,queue`

If you want a minified version, add `--prod` flag.

`grunt build -modules=farm,queue --prod`

The script will be compiled inside `dist/`

## Languages

- English
- Portuguese

Each module has it's own locale file. `src/modules/some_module/locales.json`

## Changelog

### 2.2.3
- [Fixed] "Route not public" error after reconnecting.
- [Fixed] List of events now are updated when related settings are changed.
- [Fixed] Event texts are showed accordingly to the selected language.
- [Fixed] Filtered events don't show anymore on initialization.
- [Changed] Preset infomations are now more easy to understand.

### 2.2.2
- [Fixed] Tools inilize normally when the presetName settings is empty.

### 2.2.1
- [Changed] Inputs and selects now have the text centralized.
- [Changed] New logo added
- [Changed] The groups are now stored by ID instead of names.
- [Changed] Disabled option os settings are now different from "Disabled" named groups.
- [Fixed] Registers date are now calculated by the date/time of game instead of local PC.
- [Fixed] Account's presets not beeing showed on settings when none is set.
- [Fixed] Breaking line in dates on registers tab.
- [Fixed] The duration of attacks in player targets don't exceed the limit time.
- [Fixed] Date on remote status is now formatted.
- [Fixed] Nameless presets (Desc. only) are not showed anymore on settings.
- [Fixed] The tool can be initialized only one time.
- [Fixed] Translations/labels.
- [Fixed] Internal errors.
