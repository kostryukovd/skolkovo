<?php

if($handle = opendir('img/gallery')) {
    $counter = 1;
    print(1);
    while(false !== ($fileName = readdir($handle))) {
        if($fileName === "." || $fileName === "..") {

        }
        else {
            $newName = "{$counter}.jpg";
            rename($fileName, $newName);
            $counter++;
        }

        print($counter);
    }
    closedir($handle);
}
else {
  print(0);
}


/**
 * Created by PhpStorm.
 * User: Ale
 * Date: 14.09.2018
 * Time: 14:29
 */