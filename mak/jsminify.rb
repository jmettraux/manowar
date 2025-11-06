

v = File.read('src/manowar.js').match(/VERSION = '([^']+)';/)[1]

puts "// ** manowar #{v} **"
puts "// #{`git rev-parse HEAD`}"
puts "// #{Time.now.to_s}"

STDIN.readlines.each do |l|
  next if l.strip == ''
  next if l.match?(/^\s*\/\//)
  if (
    l.match?(/let .+ = function\(/) ||
    l.match?(/^\s+this\..+ = [a-zA-Z0-9]+;\n$/) ||
    l.match?(/^\}\)\.apply/)
  ) then
    print "\n"; print l.chomp
  else
    print l.strip
  end
end

puts ' ' + v

