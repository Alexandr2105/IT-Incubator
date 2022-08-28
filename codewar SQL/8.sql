SELECT
CASE
WHEN a*(b+c)>=a*b*c AND a*(b+c)>=(a+b)*c AND a*(b+c)>=a+b+c THEN a*(b+c)
WHEN a*b*c>=a*(b+c) AND a*b*c>=(a+b)*c AND a*b*c>=a+b+c THEN a*b*c
WHEN (a+b)*c>=a*b*c AND (a+b)*c>=a*(b+c) AND (a+b)*c>=a+b+c THEN (a+b)*c
WHEN a+b+c>=a*b*c AND a+b+c>=(a+b)*c AND a+b+c>=a*(b+c) THEN a+b+c
END
AS res
FROM expression_matter;