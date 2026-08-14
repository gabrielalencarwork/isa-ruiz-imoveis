import shutil
import os

src_video = r"C:\Users\User\Downloads\Criar_movimento_de_drone_202608141105.mp4"
dir_ayer = r"C:\Users\User\Desktop\Sites\ayer-patricio-imoveis"
dir_tercio = r"C:\Users\User\Desktop\Sites\tercio-mendes-imoveis"

os.makedirs(os.path.join(dir_ayer, "assets"), exist_ok=True)
os.makedirs(os.path.join(dir_tercio, "assets"), exist_ok=True)

if os.path.exists(src_video):
    shutil.copy(src_video, os.path.join(dir_ayer, "assets", "hero-bg-drone.mp4"))
    shutil.copy(src_video, os.path.join(dir_tercio, "assets", "hero-bg-drone.mp4"))
    print("VIDEO_COPIED_SUCCESSFULLY")
else:
    print("SRC_NOT_FOUND:", src_video)

for fname in ["index.html", "styles.css", "app.js"]:
    s = os.path.join(dir_tercio, fname)
    d = os.path.join(dir_ayer, fname)
    if os.path.exists(s):
        shutil.copy(s, d)

print("SYNC_COMPLETED")
