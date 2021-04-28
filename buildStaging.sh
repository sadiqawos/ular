#!/bin/bash
set -e

# angular production build
ng build --configuration="production"

# upload front-end code
scp -r dist ubuntu@building30.com:/home/ubuntu/ular-staging
exit
