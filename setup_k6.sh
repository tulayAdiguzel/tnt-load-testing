#!/bin/bash
set -ex

su apt-get update
su apt-get install dirmngr --install-recommends
su apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
su apt-get update
su apt-get install k6
