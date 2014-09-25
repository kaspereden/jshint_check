jshint_check
============

> Check your JavaScript files against this JSHint config

How to
------

You are required to have *npm* and *grunt* installed.

`$ npm install`

Place your code in the 'code' folder and run:

`$ grunt develop` or `$ grunt deploy`

Settings
--------

- **browser**: *true*.
	- Expect code always to run in browser
- **esnext**: *true*.
	- This option tells JSHint that your code uses ECMAScript 6 specific syntax. Note that these features are not finalized yet and not all browsers implement them.
- **eqeqeq**: *true*.
	- Require triple equals (===) for comparison
- **forin**: *true*.
	- This option requires all for in loops to filter object's items.
- **quotmark**: *single*
	- This option enforces the consistency of quotation marks used throughout your code.
- **undef**: *true*.
	- Require all non-global variables to be declared (prevents global leaks)
- **unused**: *true*.
	- This option warns when you define and never use your variables.
- **jquery**: *true*.
	- This option defines globals exposed by the jQuery JavaScript library.
- **strict**: *true*
	- This option requires all functions to run in ECMAScript 5's strict mode.
- **globals**: All used globals
	- console
- **newcap**: *false*
	- This option requires you to capitalize names of constructor functions. Capitalizing functions that are intended to be used with new operator is just a convention that helps programmers to visually distinguish constructor functions from other types of functions to help spot mistakes when using this.
- **latedef**: *true*.
	- Require variables/functions to be defined before being used
