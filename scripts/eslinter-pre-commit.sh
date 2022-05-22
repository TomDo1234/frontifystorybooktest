#!/bin/bash

LIST=`git diff-index --diff-filter=d --name-only HEAD | grep -E "(.*)\.(jsx|js)$"`
if [ "$LIST" ]; then  eslint $LIST; fi 