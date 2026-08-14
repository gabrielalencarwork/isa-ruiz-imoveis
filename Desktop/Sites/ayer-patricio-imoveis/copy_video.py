import shutil
import os

src = r"C:\Users\User\Downloads\Criar_movimento_de_drone_202608141105.mp4"
dst = r"C:\Users\User\Desktop\Sites\ayer-patricio-imoveis\assets\hero-bg-drone.mp4"

if os.path.exists(src):
    shutil.copy(src, dst)
    print("SUCCESS")
else:
    print("SOURCE_NOT_FOUND")
