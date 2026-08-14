import shutil
import os

src_video = r"C:\Users\User\Downloads\Criar_movimento_de_drone_202608141105.mp4"
dir_tercio = r"C:\Users\User\Desktop\Sites\tercio-mendes-imoveis"

os.makedirs(os.path.join(dir_tercio, "assets"), exist_ok=True)

if os.path.exists(src_video):
    dst = os.path.join(dir_tercio, "assets", "hero-bg-drone.mp4")
    shutil.copy(src_video, dst)
    print(f"COPIED TO {dst}")
else:
    print("SRC_NOT_FOUND")
