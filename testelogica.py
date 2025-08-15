import os
os.system("cls")

def inverter_frase(frase):
    return frase [::-1]

palavra = input("Digite uma Palavra ou Frase: ")
invertido = inverter_frase(palavra) 
print(invertido)