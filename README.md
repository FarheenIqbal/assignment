# Web Development using Javascript with Parcel

Web development using [parcel](https://parceljs.org), [eslint](http://eslint.org) for linting Javascript, [prettier](https://prettier.io/) for formatting Javascript files.

## Usage

1.  Install [nodejs](https://nodejs.org/en/). I highly recommend using [nvm](https://github.com/creationix/nvm). If you are on mac or ubuntu, you could use the following command to install nodejs. It's from my [dotfiles](https://gitlab.com/seartipy/dotfiles) configuration.

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
        nvm install stable
        npm install -g yarn npm-check-updates

2.  Clone this repository, install npm packages and open the project in visual studio code. Make sure you have [git](https://git-scm.com/) installed.

        git clone --depth=1 https://github.com/pervezfunctor/js-starter.git
        cd js-starter && rm -rf .git
        yarn install
        code .

3.  Start server using the following command.

        yarn start

    Now you can edit `src/index.js` in any editor and see your changes in browser immediately.

4.  If you use `visual studio code`, install `visual studio code extensions` using the following commands

         code --install-extension msjsdiag.debugger-for-chrome
         code --install-extension dbaeumer.vscode-eslint
         code --install-extension esbenp.prettier-vscode

## License

MIT
