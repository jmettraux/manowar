
copy_test_to_clipboard:
	cat tst/prelude.js src/manowar.js tst/test.js | xclip -i -selection c

package:
	cat src/manowar.js | ruby mak/jsminify.rb > pkg/manowar.js
pkg: package


.PHONY: copy package

