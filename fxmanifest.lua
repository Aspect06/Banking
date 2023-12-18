fx_version "cerulean"
game { "gta5" }
lua54 'yes'

author "Aspect"
description "Banking script"

ui_page "dist/web/index.html"

files {
  "dist/web/index.html",
  "dist/web/case.svg",
  "dist/web/loader.svg",
  "dist/web/apps/*.png",
  "dist/web/assets/**",
  "dist/web/backgrounds/*",
  "dist/web/sounds/**"
}

client_scripts {
  "@Framework/client/lib/cl_rpc.lua",
  "Client/*.lua",
  "Client/Modules/*.lua",
}

server_scripts {
  "@Framework/server/lib/sv_rpc.lua",
  "@oxmysql/lib/MySQL.lua",
  "Server/*.lua",
  "Server/Modules/*.lua"
}

shared_scripts {
  '@Framework/shared/lib/sh_util.lua'
}