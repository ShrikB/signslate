import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 
import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
from PIL import Image

class_names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y' , ' ']

filepath = './saved_model'
loaded_model = load_model(filepath)

def predict(filename):
    img_data = Image.open(filename).convert('L')
    img_arr = np.array(img_data)
    img_arr = 255 - img_arr
    img_arr = img_arr / 255

    #plt.xticks([])
    #plt.yticks([])
    #plt.grid(False)
    #plt.imshow(img_arr, cmap=plt.cm.binary)
    #plt.show()

    test_image = img_arr.reshape(1, 64, 64, 1)

    predictions = loaded_model.predict(test_image)
    prediction = np.argmax(predictions[0])
    print(f'Prediction: {class_names[int(prediction)]}')
    return str(class_names[int(prediction)])