#!/bin/bash
source ~/.bash_profile
gnome-terminal --profile=bash-login default --tab -t Hugo -e "bash hugo.sh"  --tab -t Sass -e "bash sass.sh"
# gnome-terminal --profile=bash-login default --tab -t Hugo -e "bash hugo.sh"
