#!/bin/bash

ffmpeg -i $1 \
  -c:v libx264 \
  -c:a aac \
  -strict \
  -2 \
  -f hls \
  -hls_time 10 \
  -hls_list_size 0 \
  -hls_segment_filename "./dist/public/videos/output%03d.ts" \
  ./dist/public/videos/output.m3u8
