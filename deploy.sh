ng build --prod --output-path docs --base-href /ar-messenger/;
git add --all;
git commit -m "$1";
git pull;
git push;
