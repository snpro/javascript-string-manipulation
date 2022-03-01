const usage = "Usage: crlf-convert [CR|LF|CRLF]";

const help = String.raw`${usage}\n
         Converts text between newline (n), carriage return (r), and combined\n
         line endings.\n
         Options:\n
         [CR|LF|CRLF]: Desired line ending\n
             CR is a carriage return character r (rare)\n
             LF is a line feed character n (common on Unix and macOS)\n
             CRLF is a combined ending r n (common on Windows)\n
         Example:\n
             cat in.txt | crlf-convert LF > out.txt`;

module.exports = {
  help,
  usage
};
