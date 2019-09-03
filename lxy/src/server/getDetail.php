<?php

  include './base.php';

  $id = $_GET['id'];

  $sql = "SELECT * FROM `goods2` WHERE `goods_id`='$id'";

  $res = mysql_query($sql);

  if (!$res) {
    die('error for mysql: ' . mysql_error());
  }

  $row = mysql_fetch_assoc($res);

  echo json_encode(array(
    "code" => 1,
    "message" => "获取商品信息成功",
    "detail" => $row
  ))

?>
