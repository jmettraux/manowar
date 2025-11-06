
copy:
	cat tst/prelude.js src/manowar.js tst/test.js | xclip -i -selection c
cp: copy

package:
	echo "// **manowar**" > pkg/manowar.js
	echo -n "// " >> pkg/manowar.js
	git rev-parse HEAD >> pkg/manowar.js
	echo -n "// " >> pkg/manowar.js
	date >> pkg/manowar.js
	cat src/manowar.js \
	| perl -ne 'print if /\S/' \
    | perl -ne 'print if !/^\s*\/\//' \
      >> pkg/manowar.js
pkg: package

mini:
	cat src/manowar.js | ruby mak/jsminify.rb

