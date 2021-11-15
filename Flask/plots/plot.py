import matplotlib.pyplot as plt
import os
import uuid

def plotGen(points:list):
    for xpoints,ypoints in points:
        plt.plot(xpoints, ypoints)
    name = uuid.uuid1()
    plt.xlabel('x')
    plt.ylabel('y')
    if(not os.path.exists(f'./static/{name}.png')):
        plt.savefig(f"./static/{name}.png",format='png')
    plt.close()

    return name