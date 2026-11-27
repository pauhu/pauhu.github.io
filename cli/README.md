# pauhu command line

Ask a question and get a cited answer. The answer is written on your own computer.

Status: candidate. Not published, not yet tested on a stranger's machine.

## Install

You need Node.js 20 or newer, a computer with a supported graphics card, and a model pack folder that contains `model.onnx`.

```sh
cd cli
npm install
npm link        # puts `pauhu` on your path
```

## Commands

```sh
pauhu key set                       # reads your developer key from stdin, saves it with mode 0600, never prints it
pauhu pack <folder>                 # remembers the model pack folder
pauhu ask "your question"           # gets sources with your key, prints a cited answer
pauhu ask --sources s.json "question"   # answers only from your own sources, no key, no service call
```

`s.json` is a list of `{ "id": "...", "text": "..." }`. See `sources.example.json`.

Example for the key (paste your key, then press Ctrl+D):

```sh
pauhu key set
```

## Limits

- Graphics card only. There is no processor fallback; without a supported card the command stops with a clear message.
- The line printed after an answer is a local fingerprint, not a receipt from the service.
- Sourced answers (without `--sources`) need a developer key. Whether a key works end to end has not been verified.
- If no cited answer can be written from the sources, the command prints the sources and exits with code 2.

## Licence

Apache-2.0, see `LICENSE`.
