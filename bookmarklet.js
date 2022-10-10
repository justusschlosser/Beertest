regex = G\.\sL\. c\. (\d+), § (\d+)

replace_str = '<A HREF="https://malegislature.gov/Laws/GeneralLaws/Chapter$1/Section$2"taget="_blank">G. L. c. $1  § $2</A>'

document.body.innerHTML = document.body.innerHTML.replace(regex, replace_str);
