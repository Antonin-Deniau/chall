.PHONY: compile clean

clean:
	rm -rf ./dist

compile:
	mkdir -p ./dist
	cat templates/template.js |sed "s/STRING_TO_REPLACE/$$(./vm_compile ./src/main.jasm)/" | npx terser --compress --mangle -- > dist/index.js
	D=$$(cat ./dist/index.js|sed 's/\&/\\&/g'); cat ./templates/template.htm | sed "s/STRING_TO_REPLACE/$${D}/" | npx html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true > ./dist/index.html
	cat ./dist/index.html | lzma -9 | base64 | xargs -0 printf "https://itty.bitty.site/#/%s\n" |tr -d \\n

