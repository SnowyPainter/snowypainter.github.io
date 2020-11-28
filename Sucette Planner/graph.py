from pylab import *
import numpy as np
import matplotlib.pyplot as plt

# tuple tuple  float plots
def cyclonePart(radius,startAngle=(), plots=[], maxRec=0, curRec=0):
    if startAngle == ():
        startAngle = (-np.pi/2, 0)
    
    radius = radius
    startAngle = (startAngle[1], startAngle[1]-np.pi/2)

    theta = np.linspace(startAngle[0], startAngle[1], 100)
    plots.extend((radius*np.sin(theta), radius*np.cos(theta)))
    if maxRec <= curRec:
        return [i[0] for i in plots], [i[1] for i in plots]
    curRec += 1
    return cyclonePart(radius, startAngle, plots, curRec=curRec)

radius = 30

theta = np.linspace(-np.pi, np.pi, 100)
x=radius*np.sin(theta)
y=radius*np.cos(theta)

cycX, cycY = cyclonePart(radius)

x = np.append(x,cycX)
y = np.append(y,cycY)

plt.plot(cycX,cycY)
plt.axis("equal")
plt.show()