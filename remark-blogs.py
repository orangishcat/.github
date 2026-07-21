from glob import glob
import re

directory = input("Enter directory to remark: ")

files = glob(f"./src/content/blog/{directory}/**/*.md")
files.sort()

file_pattern = re.compile("!\\[\\[.*attachments/(.*)\\]\\]")

def remark_file(file):
    with open(file) as f:
        content = f.read()
    remarked = re.sub(file_pattern, "![\\1](./attachments/\\1)", content)
    with open(file, "w") as out:
        out.write(remarked)
    with open("out.md", "w") as out:
        out.write(remarked)


for file in files:
    remark_file(file)
