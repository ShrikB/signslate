import numpy as np
import glob
from PIL import Image

imgs = glob.glob("C:/Users/sshak/Desktop/3258_5337_bundle_archive/raw/*.jpg")
print(imgs)

for img in imgs:
    load_img = np.array(Image.open(img).resize((64, 85)))
    load_img = load_img[10:74, :]
    Image.fromarray(load_img).save(img.split("\\")[0] + "/resized/r_" + img.split("\\")[1])
    
no = input("no")