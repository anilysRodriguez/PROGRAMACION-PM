#Hacemos llamado a las librerías que contienen las funciones necesarias
#para que el proyecto funcione
import pygame, sys
from pygame.locals import*
from random import randint

pygame.init()
#---------------------- Organizacion de ventana -------------------
ventana = pygame.display.set_mode((640,360)) #Tamaño de la ventana
pygame.display.set_caption("Laberinto") #Le damos un título a nuestro programa
#Creamos la imagen de fondo de la ventana
FondoDePantalla = pygame.image.load("FondoDePantalla.jpeg").convert()
 

#-----------------------  Creación de personaje  ------------------
Mi_imagen = pygame.image.load("b.gif")
#Le damos la posición inicial del personaje
posX=0 #Eje x
posY=100 #Eje y
#Cantidad de pixeles que se moverá el personaje
velocidad = 20

#---------------------- Creacion de mensaje ganador ---------------
Mensaje = pygame.image.load("Mensaje.png")
#Le damos la posición inicial a nuesto mensaje
posX2=460 #Eje x
posY2=500 #Eje y

#---------------------- Parte funcional del programa --------------
while True: #Creamos un ciclo infinito para que el programa no se cierre solo
  
  ventana.blit(FondoDePantalla,[0,0])#Le decimos que ponga el fondo de pantalla
  ventana.blit(Mi_imagen,(posX,posY))#Ponemos a nuestro personaje en la ventana
  ventana.blit(Mensaje,(posX2,posY2))#Ubicamos el mensaje en la ventana
  
  for event in pygame.event.get():#Recepción de eventos
    if event.type == QUIT:#Si el evento es cerrar la ventana
      pygame.quit()#Se cierra le ventana
      sys.exit()#Cerrar 
    elif event.type == pygame.KEYDOWN:#Cuando se precione una tecla
      if event.key == K_LEFT:#Cuando se preciona la flecha izquierda
        if posX-20 >= -20:
        	posX -= velocidad #Mueve al personaje a la izquierda
        	Mi_imagen = pygame.image.load("a.gif")
      elif event.key == K_RIGHT:#Cuando se preciona la flecha derecha
      	if posX+20 < 560:
      		posX += velocidad#Mueve al personaje a la derecha
      		Mi_imagen = pygame.image.load("b.gif")       
      elif event.key == K_UP:#Cuando se preciona la flecha arriba
      	posY -= velocidad
      elif event.key == K_DOWN:#Cuando se preciona la flecha abajo
      	posY +=velocidad
      
    elif event.type == pygame.KEYUP:#Cuando se suelta la tecla
      if (posX == 500) and ((posY <= 280) and (posY >= 260)):#Si el personaje llegó al castillo
        posY2=100
      else:
        posY2=500
    
  pygame.display.update()#La ventana se actualiza