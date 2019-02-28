docker run --rm -v $PWD:/MP -e "MP_URL=$MP_URL" testcafe/testcafe 'chromium:headless --no-sandbox' --screenshots-on-fails /MP/tests/e2e/features/ "/MP/modules/**/test/*.js"