<?php 

header("Content-Type: text/event-stream\n\n");

$total_count = 0;

while (1) {
  
  echo "event: ping\n";
  echo 'data: {"count": "' . $total_count . '"}';
  echo "\n\n";
  
  ob_end_flush();
  flush();
  sleep(rand(1, 3));

  $total_count++;
}