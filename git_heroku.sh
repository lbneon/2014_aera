git add .
git commit -m "release beta" -a
git push origin master -f
git checkout gh-pages
git commit -m "release beta" -a
git push origin gh-pages -f
git push bitbucket master -f
