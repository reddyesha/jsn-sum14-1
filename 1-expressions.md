
**a)** `"1" == 1`
> true

**b)** `"1" === 1`
> false

**c)** `true == "true"`
> false

**d)** `false== ""`
> true

**e)** `x++ == ++x`
> false

**f)** `++x == x++`
> true

**g)** `"1"+x == 1+x`
> true

**h)** `"0"+1 == 1`
> true

**i)** `(typeof (x+1))==(typeof x)`	
> true

**j)** `(x-=x)? x: (typeof x)`
> "number"

**k)** `(x*1 == x) || ((typeof x) != "number")`
> true

**l)** `(x=(typeof (x+(typeof x))))==x`
> true

**m)** `x=-1,0,-x---1+'0'+x`

