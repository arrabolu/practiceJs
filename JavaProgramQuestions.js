/* 
	public static String removeDupilcates(String str) {
		
		Set<Character> set = new HashSet();
		List<Character> list = new ArrayList();
		StringBuffer sb = new StringBuffer();
		for(int i = 0; i<str.length();i++) {
			char ch = str.charAt(i);
			if(!list.contains(ch)) {
				list.add(ch);
				sb.append(ch);
			}
		}
		System.out.println(list);
		return sb.toString();
	}


    public static String reverseSentence(String string) {

	 String[] words	 = string.split(" ");
	 
	 String result = "";
	 
	 for(int i = words.length - 1; i>=0; i--) {
		 result = result + words[i] + " " ;
	 }
	 
	 return result;
	 
	}

    public static void checkForPallendrome() {
		
		System.out.println("Enter the input String");
		Scanner scan = new Scanner(System.in);
		String originalString = scan.nextLine();
		String reverseString = "";
		for(int i = originalString.length() - 1; i>= 0;i--) {
			reverseString = reverseString +	originalString.charAt(i)  ;
		}
		
		if(reverseString.equals(originalString)) {
			System.out.println("String is Palendrome");
		}else
			System.out.println("String is not Palendrome");
		
	}



    public static void isAnagram(String String1,String string2) {
		
		char[] charArray1 = String1.toCharArray();
		
		char[] charArray2 = string2.toCharArray();
		
		Arrays.sort(charArray1);
		Arrays.sort(charArray2);
		
		boolean result = Arrays.equals(charArray1, charArray2);
		
		if(result) {
			System.out.println("Given string is Anagram");
		}else
		System.out.println("Given string is not Anagram");
		
	}


    public static char getNonRepeatingChar(String str) {
		char[] charArray = str.toCharArray();
		
		Map<Character,Integer> map = new LinkedHashMap();
		
		for(char character : charArray) {
			map.put(character, map.containsKey(character) ? map.get(character) + 1 : 1 );
		}
		
		for(Entry<Character, Integer> entry : map.entrySet()) {
			if(entry.getValue() == 1) {
				return entry.getKey();
			}
		}throw new RuntimeException("Didnt find any non-repeting character");

	}


	public static void findingSecondSmallestNum(int[] array) {
		
		int secondSmallNum = Arrays.stream(array).distinct().sorted().skip(1).findFirst().orElseThrow(() ->  new IllegalArgumentException("Unable to find the second smallest number"));
		
		System.out.println(secondSmallNum);
		
	}
=============== Reverse a array or string in java ===============================================

	public static void reverseArray(int[] array) { // {1,2,3,4,5,6}
		
		IntStream.range(0, array.length/2 ).forEach(index->{ // 0,1,2
			int temp = array[index];
			array[index] = array[array.length -index - 1];
			array[array.length - index - 1] = temp;
		});
		
		System.out.println("Revesed array "+Arrays.toString(array));
		
		
	}

	String str = "Hello";
		
		String[] orginalString = str.split("");
		
		System.out.println(Arrays.toString(orginalString));
		
		IntStream.range(0, orginalString.length/2).forEach(index -> {
			String temp = orginalString[index];
			orginalString[index] = orginalString[orginalString.length - index -1];
			orginalString[orginalString.length - index -1] = temp;
			
		});

		String ResultantString =  String.join("", orginalString);
		
		System.out.println(Arrays.toString(orginalString));



	public static void lengthOfLongestString(String[] stringArray) {
		int resultNum =	Arrays.stream(stringArray).mapToInt(str -> str.length()).max().orElse(0);
	
		System.out.println("Longest String in the array "+resultNum);
	}

	public static void removeIntDuplicates(List<Integer> list) {
		
		Set<Integer> set = new HashSet();
		
		list.stream().filter(num -> !set.add(num)).distinct().forEach(num -> System.out.println(num));
		
		
	}

	List<Integer> list =	Arrays.asList(10,20,30,40);
	
	List<Integer> limitedList = list.stream().limit(3).collect(Collectors.toList());
	
	System.out.println(limitedList);


	public static void brackets{
		String bracket = "{}()[]";
		int store =0;
		if(bracket.length() % 2 ==0) {
		for(int i=0;i<bracket.length();i= i +2) {
			if(bracket.charAt(i) == '(' && bracket.charAt(i+1) == ')') {
				store+=2;
			}else if(bracket.charAt(i) == '[' && bracket.charAt(i+1) == ']') {
				store+=2;
			}else if(bracket.charAt(i) == '{' && bracket.charAt(i+1) == '}') {
				store+=2;
			}
		}
		}else {
			System.out.println("False");
		}
		
		if(store == bracket.length()) {
			System.out.println("True");
		}else if(store != bracket.length()) {
			System.out.println("False");
		}
	}

	public static void secondLargestNumber(int[] numbs) {
		List<Integer> list = Arrays.stream(numbs).sorted().boxed().collect(Collectors.toList());
		
		Object[] array = list.toArray();
		
		System.out.println(Arrays.toString(array));
		
		System.out.println(array[array.length - 2]);
	}

	**This code helps in findind the 2nd largest number

	int[] array = {21,23,12,1,99,55};
	List<int[]> list =Arrays.asList(array);
	Collections.sort(list, Collections.reverseOrder());


	Count of duplicates by Set 
	Map<String,Long> map =  list.stream().collect(Collectors.groupingBy(Employee::getName,Collectors.counting()));
		
	 // Other way to find the count of duplicates
	    Map<String,Integer> map1 = new HashMap();
		
		for(Employee e : list) {
			map1.put(e.getName(),map1.containsKey(e.getName())? map1.get(e.getName()) + 1:1 );
		}
		System.out.println(map1);
	}


	public static void reverseString{
		String str = "Hello World";
		
		String[] strArray = str.split("");
		
//		System.out.println(Arrays.toString(strArray));
		
		IntStream.range(0, strArray.length/2).forEach((i)->{
			String temp = strArray[i];
			strArray[i] = strArray[strArray.length -i - 1];
			strArray[strArray.length -i - 1] = temp;
		});
		
		String result =String.join("", strArray);
		System.out.println(result);
	}

	* Grouping by certain values in map
	List<Employee> employeeList = new ArrayList<>();
		
		Employee e1 =	new Employee("peter",101,1000);
		Employee e2 =   new Employee("Gwen",102,1000);
		Employee e3 =   new Employee("Tom",103,12000);
		
		employeeList.add(e1);
		employeeList.add(e2);
		employeeList.add(e3);
		
		Map<Integer,List<Employee>> map = employeeList.stream().collect(Collectors.groupingBy(Employee::getSalary));



*/