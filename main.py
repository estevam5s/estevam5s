import os

# classe de gerar commits
class Commit:
    def __init__(self, days):
        self.days = days

    def makeCommits(self):
        if self.days < 1:
            os.system('git push')
        else:
            dates = f"{self.days} days ago"
            with open('data.txt', 'a') as file:
                file.write(f'{dates} <- this was the commit for the day!!\n')
            
            # staging 
            os.system('git add data.txt')

            # commit 
            os.system('git commit --date="'+ dates +'" -m "➕ adding new feature in profile readme on github"')

            self.days -= 1
            self.makeCommits()


if __name__ == "__main__":
    cont = 0
    maxNumero = 1000
    while True:
        if cont < maxNumero:
            makeCommits(cont)
            cont += 1
        else:
            break


def makeCommits (days):
    if days < 1:
        os.system('git push')
    else:
        dates = f"{days} days ago"
        with open('data.txt', 'a') as file:
            file.write(f'{dates} <- this was the commit for the day!!\n')
        
        # staging 
        os.system('git add data.txt')

        # commit 
        os.system('git commit --date="'+ dates +'" -m "➕ adding new feature in profile readme on github"')

        # days * makeCommits(days - 1)

cont = 0
maxNumero = 1000
while True:
    # makeCommits(1)
    makeCommits(1000 - maxNumero)
    cont += 1
    maxNumero -= 1
    if cont == 1000:
        break