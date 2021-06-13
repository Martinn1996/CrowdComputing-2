import csv
import os
import matplotlib.pyplot as plt
from scipy.stats import mannwhitneyu, wilcoxon, ttest_ind

# INPUT:url	OUTPUT:code	OUTPUT:remark	OUTPUT:waiting	OUTPUT:experience	GOLDEN:code	GOLDEN:remark	GOLDEN:waiting	GOLDEN:experience	HINT:text	HINT:default_language	ASSIGNMENT:link	ASSIGNMENT:assignment_id	ASSIGNMENT:worker_id	ASSIGNMENT:status	ASSIGNMENT:started

# Read all results
def readResults():
	directory = os.listdir("./results")

	result = {'1':[], '2':[], '3':[], '4':[], '5':[]}

	for i in range(0, len(directory)):
		f = open('./results/' + directory[i], "r")
		parsed = csv.reader(f, delimiter="\t")

		for row in parsed:
			task= row[0][-1]

			temp = {}
			temp['code'] = int(row[1][-1])
			temp['remark'] = row[2]
			temp['waiting'] = int(float(row[3]))
			temp['experience'] = int(float(row[4]))

			result[task].append(temp)

	return result

# Print all the remarks
def printRemarks(result):
	for key in result:
		print("For task {arg1}:".format(arg1=key))

		printList = list(map(lambda x: x['remark'], result[key]))
		for remark in printList:
			if len(remark.strip()) != 0:
				print(remark)
		print()

def performHypothesisTest(result):
	benchmark = result['5']
	for code in result:
		if code == '5':
			continue
		set1 = result[code]
		print("--- Hypothesis testing for task {arg1} ---".format(arg1=code))
		print('    Perceived waiting time:')
		hypothesisTest(set1, benchmark)
		print()
		print('    Experience rating:')
		hypothesisTest(set1, benchmark, attribute='experience')
		print('-------------------------------------')
		print()



def hypothesisTest(set1, set2, attribute='waiting'):
	set1Waiting = list(map(lambda x: x[attribute], set1))
	set2Waiting = list(map(lambda x: x[attribute], set2))
	u, p_value = mannwhitneyu(set1Waiting, set2Waiting)

	if p_value < 0.05:
		print('    Difference is significant: {arg1}'.format(arg1=p_value))
	else:
		print('    Not significant: {arg1}'.format(arg1=p_value))

def generateHistograms(result):
	for code in result:
		waitingList = list(map(lambda x: x['waiting'], result[code]))
		histogram(waitingList, 'waiting_{arg1}'.format(arg1=code), 10)

		ratingList = list(map(lambda x: x['experience'], result[code]))
		histogram(ratingList, 'rating_{arg1}'.format(arg1=code), 10)

def generateBoxplot(result):
	fig = plt.figure(1, figsize=(9, 6))
	ax = fig.add_subplot(111)
	labels = ["Interface 1", "Interface 2", "Interface 3", "Interface 4", "Benchmark"]
	data = []
	for task in result:
		experiences = list(map(lambda x: x['experience'], result[task]))
		data.append(experiences)

	
	bp = ax.boxplot(data, showmeans=True, labels=labels)
	fig.savefig('boxplot.png', bbox_inches='tight')

def histogram(x, code, bin):
	plt.hist(x, bins=bin)  # density=False would make counts
	plt.ylabel('Number of occurences')
	plt.xlabel('Data')
	plt.title('Distribution for task {arg1}'.format(arg1=code))
	plt.savefig("histogram_{arg1}.png".format(arg1=code))

	plt.clf()

def countInteractions(result):
	valid = [0, 1, 2, 3]
	newResult = {}

	for task in result:
		print('Task {arg1}'.format(arg1=task))

		temp = {}
		for i in valid:
			codeList = list(filter(lambda x: x['code'] == i, result[task]))
			print('{arg1} task completed: {arg2}'.format(arg1=i, arg2=len(codeList)))

			temp[i] = len(codeList)
		newResult[task] = temp
	
	return newResult


result = readResults()
printRemarks(result)
generateHistograms(result)
performHypothesisTest(result)
countInteractions(result)
generateBoxplot(result)