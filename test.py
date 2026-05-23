from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless')
driver = webdriver.Chrome(options=options)
driver.get("http://localhost:8080/index.html")

logs = driver.get_log("browser")
for log in logs:
    print(log)
driver.quit()
