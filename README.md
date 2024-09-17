# VC4ALL website

[Short introductionary paragraph]

## Component 1
[ Explanation and tooling for Component 1]

## Component 2
[ Explanation and tooling for Component 1]

## Component N
[ Explanation and tooling for Component 1]

## Tools

TODO: describe tools
TODO: setup makefile
* `./bin/console` runs an interactive console which allows interaction
    with the blockchain
* `make`, outlined in Quickstart, is used to wrap all the steps to get
    going, run tests, build and deploy the platform.

## Quickstart

Requirements:

* hugo. `apt get hugo` or `brew install hugo`. [More alternatives](https://gohugo.io/getting-started/installing/)
* npm
* npm install autoprefixer
* npm install postcss-cli

Note: on Ubuntu 18.04 it is better to install using snap: 
sudo snap install hugo --channel=extended 


### Install

TODO: put everything in a Makefile

In order to install the platform on development machine, run

    make install

This installs and configures the dependencies.


### Run

TODO: make a default make target that builds

After installing the dependencies, on the development machine, run

    make

This builds and runs the platform locally.

### Test

TODO: make a make target to preview the site locally

After installing the dependencies, on the development machine, run

    make test

This builds and runs the tests locally.

### Release


TODO: hook git flow into a make target

After finishing the changes, a release can be prepared with

    make release

This uses amongst others, git-flow to create and tag a new release. It
bumps the version number. Add `VERSION=x.y.z-special` to set a specific
version, instead of incrementing the next minor version (1.2.3 -> 1.3.0)

### Deploy

After testing locally, anyone with a `deploy key` can deploy with:

`hugo && rsync -avz --delete public/ deploy@136-144-205-16.colo.transip.net:/var/www/main/current/`

If you're using a ssh key that is not managed with your ssh-agent, select it:
`hugo && rsync -e "ssh -i /home/USERNAME/.ssh/vc4all_server" -avz --delete public/ deploy@136.144.205.16:/var/www/main/current/`



TODO: hook this into a make target
TODO: Checks preconditions such as proper git-tags, branches, permissions
and sanity checks and when met, deploys current release.

