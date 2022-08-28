SELECT
CASE
WHEN number<0 THEN number*(-1)
WHEN number>0 THEN number*(-1)
ELSE 0
END
AS res
FROM opposite;