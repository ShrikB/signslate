import numpy as np
import glob
from PIL import Image
import pandas as pd

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
penis = []

for i in range (0, 26):
    imgs = glob.glob("C:/Users/sshak/Desktop/3258_5337_bundle_archive/raw/resized/r_" + letters[i] + " *")
    for img in imgs:
        img_arr = np.array(Image.open(img).convert('L'))
        img_arr = 255 - img_arr
        img_arr = img_arr.flatten()
        img_list = img_arr.tolist()
        img_list.insert(0, i)
        penis.append(img_list)

    
df = pd.DataFrame(penis)
df.to_csv(r'C:\Users\sshak\Desktop\3258_5337_bundle_archive\raw\resized\penis.csv')
        
no = input('no')
