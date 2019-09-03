<?php

  include './base.php';

  $pagenum = $_GET['pagenum'];
  $pagesize = $_GET['pagesize'];

  /*
    pagenum = 1
    pagesize = 10


    pagenum = 1    0, 10
    pagenum = 2    10, 10
    pagenum = 3    20, 10

    (pagenum - 1) * pagesize
  */

  $start = ($pagenum - 1) * $pagesize;

  # LIMIT 从第几条开始, 拿多少条
  $sql = "SELECT * FROM `goods2` LIMIT $start, $pagesize";

  $res = mysql_query($sql);

  if (!$res) {
    die('error for mysql: ' . mysql_error());
  }

  $arr = array();

  while ($row = mysql_fetch_assoc($res)) {
    array_push($arr, $row);
  }

  # 直接查询库里面有多少数据
  $sql2 = "SELECT COUNT(*) `count` FROM `goods2`";

  $res2 = mysql_query($sql2);

  if (!$res2) {
    die('error for mysql: ' . mysql_error());
  }

  $row2 = mysql_fetch_assoc($res2);

  echo json_encode(array(
    "total" => $row2,
    "list" => $arr,
    "code" => 1,
    "message" => "获取列表数据成功"
  ));

?>
