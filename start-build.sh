#!/bin/bash
cd "$(dirname "$0")"

docker compose --env-file=.env.dev up -d --build

