#!/bin/bash

if [ ! -d "runtime/mac/creator_lua-desktop.app/Contents/Resources" ]; then
    echo "not found runtime"
    exit
fi

cd ./runtime/mac/creator_lua-desktop.app/Contents/Resources/

if [ ! -d "res" ]; then
    exit
fi

rm -fr res
rm -fr src

ln -s ../../../../../res res
ln -s ../../../../../src src
