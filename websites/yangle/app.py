#!/root/venv/bin/python
# August 1, 2018, Adam Elaoud - aelaoud, Jason Chen - jaschen3
#
# Copyright (c) 2018 by Cisco Systems, Inc.
# All rights reserved.

from __future__ import print_function
from flask import Flask, request, render_template
import subprocess
import sys

app = Flask(__name__)

# Main Page
@app.route('/')
def index():
    return render_template("index.html")

# by default, can only do GET HTTP method
# use <> to signify variable
@app.route("/submission", methods = ["GET", "POST"])
def submission():
    data = request.form.to_dict()
    mode = data["mode"]
    plat = data["plat"]
    stress = data["stress"]
    release = data["release"]
    recipients = data["users"]
    stress_str = ""

    if (plat == "hardware"):
        yaml_path = data["yaml_path"]
    elif (plat == "simulation"):
        sim = data["sim"]

    if (mode != "null"):
        clis = data["clis"]

    print(data, file = sys.stdout)
    print(mode, file = sys.stdout)
    print(plat, file = sys.stdout)
    print(stress, file = sys.stdout)
    print(release, file = sys.stdout)
    print(recipients, file = sys.stdout)

    if (mode != "null"):
        print(clis, file = sys.stdout)

    if stress == 'true':
        stress_str=" -s "

    if (mode != "null" and clis != ""):
        ssh_cmd = "ssh jaschen3@sjc-ads-3389"
        create_file_cmd = "echo " + clis + " > /nobackup/jaschen3/xr-mgbl-yang/command.txt"
        run_script_cmd = "/nobackup/jaschen3/Yang-Tool-Kit/scripts/test_cli.py" + stress_str + "-t " + mode + " -c " + recipients + " -f /nobackup/jaschen3/xr-mgbl-yang/command.txt"

        # Creating command.txt
        subprocess.Popen(ssh_cmd + " \'" + create_file_cmd + "\'", shell = True)

        # Calling test_cli.py
        subprocess.Popen(ssh_cmd + " \'" + run_script_cmd + "\'", shell = True)

    return render_template("submission.html", data = data)


# Start the web server and deliver above return
if __name__ == "__main__":  # quick check, only run app if this is main file
    app.run(host = "0.0.0.0", port = "80")



    # ut_commands="""
    # aaa authorization exec WORD none
    # aaa authorization exec WORD local
    # """
