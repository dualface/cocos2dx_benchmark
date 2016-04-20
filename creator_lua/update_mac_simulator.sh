#!/bin/bash

cd ./simulator/mac/creator_lua-desktop.app/Contents/Resources/

if [ ! -d "res" ]; then
    exit
fi

rm -fr res
rm -fr src

ln -s ../../../../../res res
ln -s ../../../../../src src
