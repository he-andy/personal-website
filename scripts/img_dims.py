import os 
from PIL import Image
import json 

dir = 'public/static/images'
out = []

for filename in os.scandir(dir):
  if filename.is_file():
    path = os.path.join(*filename.path.split('/')[1:])
    img = Image.open(filename.path)
    out.append(
      {
        'src': path,
        'height': img.height,
        'width': img.width
      }
    )
f = open('src/photos.json', 'w')
f.write(json.dumps(out))

    
  